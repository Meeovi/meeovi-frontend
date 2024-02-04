import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_cms_blockInput } from "../inputs/AppCreateWithoutApp_cms_blockInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutApp_cms_blockInput", {})
export class AppCreateOrConnectWithoutApp_cms_blockInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_cms_blockInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_cms_blockInput;
}
