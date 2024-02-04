import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlowCreateOrConnectWithoutFlow_sequenceInput } from "../inputs/FlowCreateOrConnectWithoutFlow_sequenceInput";
import { FlowCreateWithoutFlow_sequenceInput } from "../inputs/FlowCreateWithoutFlow_sequenceInput";
import { FlowUpdateToOneWithWhereWithoutFlow_sequenceInput } from "../inputs/FlowUpdateToOneWithWhereWithoutFlow_sequenceInput";
import { FlowUpsertWithoutFlow_sequenceInput } from "../inputs/FlowUpsertWithoutFlow_sequenceInput";
import { FlowWhereUniqueInput } from "../inputs/FlowWhereUniqueInput";

@TypeGraphQL.InputType("FlowUpdateOneRequiredWithoutFlow_sequenceNestedInput", {})
export class FlowUpdateOneRequiredWithoutFlow_sequenceNestedInput {
  @TypeGraphQL.Field(_type => FlowCreateWithoutFlow_sequenceInput, {
    nullable: true
  })
  create?: FlowCreateWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateOrConnectWithoutFlow_sequenceInput, {
    nullable: true
  })
  connectOrCreate?: FlowCreateOrConnectWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpsertWithoutFlow_sequenceInput, {
    nullable: true
  })
  upsert?: FlowUpsertWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => FlowWhereUniqueInput, {
    nullable: true
  })
  connect?: FlowWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => FlowUpdateToOneWithWhereWithoutFlow_sequenceInput, {
    nullable: true
  })
  update?: FlowUpdateToOneWithWhereWithoutFlow_sequenceInput | undefined;
}
