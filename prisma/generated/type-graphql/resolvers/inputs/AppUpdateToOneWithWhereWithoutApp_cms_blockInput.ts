import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_cms_blockInput } from "../inputs/AppUpdateWithoutApp_cms_blockInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_cms_blockInput", {})
export class AppUpdateToOneWithWhereWithoutApp_cms_blockInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_cms_blockInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_cms_blockInput;
}
