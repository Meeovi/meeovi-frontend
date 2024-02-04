import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateWithoutFlow_sequenceInput } from "../inputs/FlowCreateWithoutFlow_sequenceInput";
import { FlowUpdateWithoutFlow_sequenceInput } from "../inputs/FlowUpdateWithoutFlow_sequenceInput";
import { FlowWhereInput } from "../inputs/FlowWhereInput";

@TypeGraphQL.InputType("FlowUpsertWithoutFlow_sequenceInput", {})
export class FlowUpsertWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => FlowUpdateWithoutFlow_sequenceInput, {
    nullable: false
  })
  update!: FlowUpdateWithoutFlow_sequenceInput;

  @TypeGraphQL.Field(_type => FlowCreateWithoutFlow_sequenceInput, {
    nullable: false
  })
  create!: FlowCreateWithoutFlow_sequenceInput;

  @TypeGraphQL.Field(_type => FlowWhereInput, {
    nullable: true
  })
  where?: FlowWhereInput | undefined;
}
