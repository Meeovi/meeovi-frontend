import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_tagCreateManyCategoryInput } from "../inputs/Category_tagCreateManyCategoryInput";

@TypeGraphQL.InputType("Category_tagCreateManyCategoryInputEnvelope", {})
export class Category_tagCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [Category_tagCreateManyCategoryInput], {
    nullable: false
  })
  data!: Category_tagCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
