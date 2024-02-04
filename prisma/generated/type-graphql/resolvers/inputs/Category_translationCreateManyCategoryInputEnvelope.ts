import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateManyCategoryInput } from "../inputs/Category_translationCreateManyCategoryInput";

@TypeGraphQL.InputType("Category_translationCreateManyCategoryInputEnvelope", {})
export class Category_translationCreateManyCategoryInputEnvelope {
  @TypeGraphQL.Field(_type => [Category_translationCreateManyCategoryInput], {
    nullable: false
  })
  data!: Category_translationCreateManyCategoryInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
