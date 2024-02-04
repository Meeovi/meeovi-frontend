import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCreateManyProductInput } from "../inputs/Product_propertyCreateManyProductInput";

@TypeGraphQL.InputType("Product_propertyCreateManyProductInputEnvelope", {})
export class Product_propertyCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_propertyCreateManyProductInput], {
    nullable: false
  })
  data!: Product_propertyCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
