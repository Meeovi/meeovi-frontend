import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateOrConnectWithoutFlow_sequenceInput } from "../inputs/App_flow_actionCreateOrConnectWithoutFlow_sequenceInput";
import { App_flow_actionCreateWithoutFlow_sequenceInput } from "../inputs/App_flow_actionCreateWithoutFlow_sequenceInput";
import { App_flow_actionUpdateToOneWithWhereWithoutFlow_sequenceInput } from "../inputs/App_flow_actionUpdateToOneWithWhereWithoutFlow_sequenceInput";
import { App_flow_actionUpsertWithoutFlow_sequenceInput } from "../inputs/App_flow_actionUpsertWithoutFlow_sequenceInput";
import { App_flow_actionWhereInput } from "../inputs/App_flow_actionWhereInput";
import { App_flow_actionWhereUniqueInput } from "../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_actionUpdateOneWithoutFlow_sequenceNestedInput", {})
export class App_flow_actionUpdateOneWithoutFlow_sequenceNestedInput {
  @TypeGraphQL.Field(_type => App_flow_actionCreateWithoutFlow_sequenceInput, {
    nullable: true
  })
  create?: App_flow_actionCreateWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionCreateOrConnectWithoutFlow_sequenceInput, {
    nullable: true
  })
  connectOrCreate?: App_flow_actionCreateOrConnectWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionUpsertWithoutFlow_sequenceInput, {
    nullable: true
  })
  upsert?: App_flow_actionUpsertWithoutFlow_sequenceInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  disconnect?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  delete?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: true
  })
  connect?: App_flow_actionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionUpdateToOneWithWhereWithoutFlow_sequenceInput, {
    nullable: true
  })
  update?: App_flow_actionUpdateToOneWithWhereWithoutFlow_sequenceInput | undefined;
}
