import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_cms_blockInput } from "../inputs/AppCreateWithoutApp_cms_blockInput";
import { AppUpdateWithoutApp_cms_blockInput } from "../inputs/AppUpdateWithoutApp_cms_blockInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_cms_blockInput", {})
export class AppUpsertWithoutApp_cms_blockInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_cms_blockInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_cms_blockInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_cms_blockInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_cms_blockInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
