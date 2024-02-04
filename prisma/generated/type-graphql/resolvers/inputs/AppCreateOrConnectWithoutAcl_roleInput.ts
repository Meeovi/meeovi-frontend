import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateWithoutAcl_roleInput } from "../inputs/AppCreateWithoutAcl_roleInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateOrConnectWithoutAcl_roleInput", {})
export class AppCreateOrConnectWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: false
  })
  where!: AppWhereUniqueInput;

  @TypeGraphQL.Field(_type => AppCreateWithoutAcl_roleInput, {
    nullable: false
  })
  create!: AppCreateWithoutAcl_roleInput;
}
