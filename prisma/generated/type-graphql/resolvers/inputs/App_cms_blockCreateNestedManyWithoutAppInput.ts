import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockCreateManyAppInputEnvelope } from "../inputs/App_cms_blockCreateManyAppInputEnvelope";
import { App_cms_blockCreateOrConnectWithoutAppInput } from "../inputs/App_cms_blockCreateOrConnectWithoutAppInput";
import { App_cms_blockCreateWithoutAppInput } from "../inputs/App_cms_blockCreateWithoutAppInput";
import { App_cms_blockWhereUniqueInput } from "../inputs/App_cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("App_cms_blockCreateNestedManyWithoutAppInput", {})
export class App_cms_blockCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_cms_blockCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_cms_blockCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_cms_blockCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_cms_blockCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereUniqueInput], {
    nullable: true
  })
  connect?: App_cms_blockWhereUniqueInput[] | undefined;
}
