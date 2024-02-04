import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateWithoutMediaInput } from "../inputs/Cms_blockCreateWithoutMediaInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockCreateOrConnectWithoutMediaInput", {})
export class Cms_blockCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_blockCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Cms_blockCreateWithoutMediaInput;
}
