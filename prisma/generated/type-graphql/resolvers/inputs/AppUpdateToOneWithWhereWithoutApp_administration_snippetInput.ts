import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutApp_administration_snippetInput } from "../inputs/AppUpdateWithoutApp_administration_snippetInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpdateToOneWithWhereWithoutApp_administration_snippetInput", {})
export class AppUpdateToOneWithWhereWithoutApp_administration_snippetInput {
  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_administration_snippetInput, {
    nullable: false
  })
  data!: AppUpdateWithoutApp_administration_snippetInput;
}
