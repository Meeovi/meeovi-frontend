import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_manufacturerInput } from "../inputs/ProductCreateManyProduct_manufacturerInput";

@TypeGraphQL.InputType("ProductCreateManyProduct_manufacturerInputEnvelope", {})
export class ProductCreateManyProduct_manufacturerInputEnvelope {
  @TypeGraphQL.Field(_type => [ProductCreateManyProduct_manufacturerInput], {
    nullable: false
  })
  data!: ProductCreateManyProduct_manufacturerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
