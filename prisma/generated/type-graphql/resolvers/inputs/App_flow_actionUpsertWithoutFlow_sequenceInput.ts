import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateWithoutFlow_sequenceInput } from "../inputs/App_flow_actionCreateWithoutFlow_sequenceInput";
import { App_flow_actionUpdateWithoutFlow_sequenceInput } from "../inputs/App_flow_actionUpdateWithoutFlow_sequenceInput";
import { App_flow_actionWhereInput } from "../inputs/App_flow_actionWhereInput";

@TypeGraphQL.InputType("App_flow_actionUpsertWithoutFlow_sequenceInput", {})
export class App_flow_actionUpsertWithoutFlow_sequenceInput {
  @TypeGraphQL.Field(_type => App_flow_actionUpdateWithoutFlow_sequenceInput, {
    nullable: false
  })
  update!: App_flow_actionUpdateWithoutFlow_sequenceInput;

  @TypeGraphQL.Field(_type => App_flow_actionCreateWithoutFlow_sequenceInput, {
    nullable: false
  })
  create!: App_flow_actionCreateWithoutFlow_sequenceInput;

  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  where?: App_flow_actionWhereInput | undefined;
}
