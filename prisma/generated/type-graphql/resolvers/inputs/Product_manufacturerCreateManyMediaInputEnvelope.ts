import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateManyMediaInput } from "../inputs/Product_manufacturerCreateManyMediaInput";

@TypeGraphQL.InputType("Product_manufacturerCreateManyMediaInputEnvelope", {})
export class Product_manufacturerCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_manufacturerCreateManyMediaInput], {
    nullable: false
  })
  data!: Product_manufacturerCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
