import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_visibilityCreateManySales_channelInput } from "../inputs/Product_visibilityCreateManySales_channelInput";

@TypeGraphQL.InputType("Product_visibilityCreateManySales_channelInputEnvelope", {})
export class Product_visibilityCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_visibilityCreateManySales_channelInput], {
    nullable: false
  })
  data!: Product_visibilityCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
