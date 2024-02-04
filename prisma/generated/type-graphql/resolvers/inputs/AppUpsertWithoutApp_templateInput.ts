import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutApp_templateInput } from "../inputs/AppCreateWithoutApp_templateInput";
import { AppUpdateWithoutApp_templateInput } from "../inputs/AppUpdateWithoutApp_templateInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutApp_templateInput", {})
export class AppUpsertWithoutApp_templateInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutApp_templateInput, {
    nullable: false
  })
  update!: AppUpdateWithoutApp_templateInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutApp_templateInput, {
    nullable: false
  })
  create!: AppCreateWithoutApp_templateInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
