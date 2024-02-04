import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationCreateManyProduct_sortingInput } from "../inputs/Product_sorting_translationCreateManyProduct_sortingInput";

@TypeGraphQL.InputType("Product_sorting_translationCreateManyProduct_sortingInputEnvelope", {})
export class Product_sorting_translationCreateManyProduct_sortingInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_sorting_translationCreateManyProduct_sortingInput], {
    nullable: false
  })
  data!: Product_sorting_translationCreateManyProduct_sortingInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
