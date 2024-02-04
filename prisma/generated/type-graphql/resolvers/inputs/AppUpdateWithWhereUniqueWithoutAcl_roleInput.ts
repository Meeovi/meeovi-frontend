import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppUpdateWithoutAcl_roleInput } from "../inputs/AppUpdateWithoutAcl_roleInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateWithWhereUniqueWithoutAcl_roleInput", {})
export class AppUpdateWithWhereUniqueWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutAcl_roleInput, {
    nullable: false
  })
  data!: AppUpdateWithoutAcl_roleInput;
}
