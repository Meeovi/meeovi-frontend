import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateWithoutMediaInput } from "../inputs/Cms_blockCreateWithoutMediaInput";
import { Cms_blockUpdateWithoutMediaInput } from "../inputs/Cms_blockUpdateWithoutMediaInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockUpsertWithWhereUniqueWithoutMediaInput", {})
export class Cms_blockUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_blockWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_blockWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_blockUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Cms_blockUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Cms_blockCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Cms_blockCreateWithoutMediaInput;
}
