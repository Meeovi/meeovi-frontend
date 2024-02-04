import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_administration_snippetInput } from "../inputs/AppCreateWithoutApp_administration_snippetInput";
import { AppUpdateWithoutApp_administration_snippetInput } from "../inputs/AppUpdateWithoutApp_administration_snippetInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_administration_snippetInput", {})
export class AppUpsertWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_administration_snippetInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_administration_snippetInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
