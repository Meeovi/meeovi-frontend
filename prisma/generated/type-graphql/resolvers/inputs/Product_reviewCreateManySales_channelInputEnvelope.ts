import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_reviewCreateManySales_channelInput } from "../inputs/Product_reviewCreateManySales_channelInput";

@TypeGraphQL.InputType("Product_reviewCreateManySales_channelInputEnvelope", {})
export class Product_reviewCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_reviewCreateManySales_channelInput], {
    nullable: false
  })
  data!: Product_reviewCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
