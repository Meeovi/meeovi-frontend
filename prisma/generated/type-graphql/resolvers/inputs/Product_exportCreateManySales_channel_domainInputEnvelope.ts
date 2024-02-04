import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManySales_channel_domainInput } from "../inputs/Product_exportCreateManySales_channel_domainInput";

@TypeGraphQL.InputType("Product_exportCreateManySales_channel_domainInputEnvelope", {})
export class Product_exportCreateManySales_channel_domainInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_exportCreateManySales_channel_domainInput], {
    nullable: false
  })
  data!: Product_exportCreateManySales_channel_domainInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
