import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateManyAppInputEnvelope } from "../inputs/App_action_buttonCreateManyAppInputEnvelope";
import { App_action_buttonCreateOrConnectWithoutAppInput } from "../inputs/App_action_buttonCreateOrConnectWithoutAppInput";
import { App_action_buttonCreateWithoutAppInput } from "../inputs/App_action_buttonCreateWithoutAppInput";
import { App_action_buttonWhereUniqueInput } from "../inputs/App_action_buttonWhereUniqueInput";

@TypeGraphQL.InputType("App_action_buttonCreateNestedManyWithoutAppInput", {})
export class App_action_buttonCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_action_buttonCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_action_buttonCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_action_buttonCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_action_buttonCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonWhereUniqueInput], {
    nullable: true
  })
  connect?: App_action_buttonWhereUniqueInput[] | undefined;
}
