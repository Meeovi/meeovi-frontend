import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateManyProductInput } from "../inputs/Product_visibilityCreateManyProductInput";

@TypeGraphQL.InputType("Product_visibilityCreateManyProductInputEnvelope", {})
export class Product_visibilityCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_visibilityCreateManyProductInput], {
    nullable: false
  })
  data!: Product_visibilityCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
