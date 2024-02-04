import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceCreateManyRuleInput } from "../inputs/Product_priceCreateManyRuleInput";

@TypeGraphQL.InputType("Product_priceCreateManyRuleInputEnvelope", {})
export class Product_priceCreateManyRuleInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_priceCreateManyRuleInput], {
    nullable: false
  })
  data!: Product_priceCreateManyRuleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
