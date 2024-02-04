import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyCms_pageInput } from "../inputs/ProductCreateManyCms_pageInput";

@TypeGraphQL.InputType("ProductCreateManyCms_pageInputEnvelope", {})
export class ProductCreateManyCms_pageInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyCms_pageInput], {
    nullable: false
  })
  data!: ProductCreateManyCms_pageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
