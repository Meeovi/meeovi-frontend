import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutAcl_roleInput } from "../inputs/AppCreateWithoutAcl_roleInput";
import { AppUpdateWithoutAcl_roleInput } from "../inputs/AppUpdateWithoutAcl_roleInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpsertWithWhereUniqueWithoutAcl_roleInput", {})
export class AppUpsertWithWhereUniqueWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppUpdateWithoutAcl_roleInput, {
    nullable: false
  })
  update!: AppUpdateWithoutAcl_roleInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutAcl_roleInput, {
    nullable: false
  })
  create!: AppCreateWithoutAcl_roleInput;
}
