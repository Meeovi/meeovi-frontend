import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowUpdateWithoutFlow_sequenceInput } from "../inputs/FlowUpdateWithoutFlow_sequenceInput";
import { FlowWhereInput } from "../inputs/FlowWhereInput";

@TypeGraphQL.InputType("FlowUpdateToOneWithWhereWithoutFlow_sequenceInput", {})
export class FlowUpdateToOneWithWhereWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  where?: FlowWhereInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateWithoutFlow_sequenceInput, {
    nullable: false
  })
  data!: FlowUpdateWithoutFlow_sequenceInput;
}
