import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateManyAppInputEnvelope } from "../inputs/App_translationCreateManyAppInputEnvelope";
import { App_translationCreateOrConnectWithoutAppInput } from "../inputs/App_translationCreateOrConnectWithoutAppInput";
import { App_translationCreateWithoutAppInput } from "../inputs/App_translationCreateWithoutAppInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationCreateNestedManyWithoutAppInput", {})
export class App_translationCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_translationCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_translationCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_translationCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_translationCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_translationCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_translationWhereUniqueInput[] | undefined;
}
