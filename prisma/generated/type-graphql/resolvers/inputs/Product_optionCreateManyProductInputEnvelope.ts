import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_optionCreateManyProductInput } from "../inputs/Product_optionCreateManyProductInput";

@TypeGraphQL.InputType("Product_optionCreateManyProductInputEnvelope", {})
export class Product_optionCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_optionCreateManyProductInput], {
    nullable: false
  })
  data!: Product_optionCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
