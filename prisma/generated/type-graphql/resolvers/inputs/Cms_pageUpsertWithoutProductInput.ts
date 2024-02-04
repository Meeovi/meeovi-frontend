import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutProductInput } from "../inputs/Cms_pageCreateWithoutProductInput";
import { Cms_pageUpdateWithoutProductInput } from "../inputs/Cms_pageUpdateWithoutProductInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";

@TypeGraphQL.InputType("Cms_pageUpsertWithoutProductInput", {})
export class Cms_pageUpsertWithoutProductInput {
  @TypeGraphQL.Field(_type => Cms_pageUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Cms_pageUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutProductInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutProductInput;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  where?: Cms_pageWhereInput | undefined;
}
