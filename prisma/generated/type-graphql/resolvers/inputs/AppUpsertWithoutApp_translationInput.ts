import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_translationInput } from "../inputs/AppCreateWithoutApp_translationInput";
import { AppUpdateWithoutApp_translationInput } from "../inputs/AppUpdateWithoutApp_translationInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_translationInput", {})
export class AppUpsertWithoutApp_translationInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_translationInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_translationInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_translationInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_translationInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
