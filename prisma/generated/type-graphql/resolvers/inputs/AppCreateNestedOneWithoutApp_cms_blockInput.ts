import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_cms_blockInput } from "../inputs/AppCreateOrConnectWithoutApp_cms_blockInput";
import { AppCreateWithoutApp_cms_blockInput } from "../inputs/AppCreateWithoutApp_cms_blockInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedOneWithoutApp_cms_blockInput", {})
export class AppCreateNestedOneWithoutApp_cms_blockInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_cms_blockInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_cms_blockInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_cms_blockInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_cms_blockInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;
}
