import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutScriptInput } from "../inputs/AppCreateWithoutScriptInput";
import { AppUpdateWithoutScriptInput } from "../inputs/AppUpdateWithoutScriptInput";
import { AppWhereInput } from "../inputs/AppWhereInput";

@TypeGraphQL.InputType("AppUpsertWithoutScriptInput", {})
export class AppUpsertWithoutScriptInput {
  @TypeGraphQL.Field(_type => AppUpdateWithoutScriptInput, {
    nullable: false
  })
  update!: AppUpdateWithoutScriptInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutScriptInput, {
    nullable: false
  })
  create!: AppCreateWithoutScriptInput;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  where?: AppWhereInput | undefined;
}
