import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateManyProductInput } from "../inputs/Product_downloadCreateManyProductInput";

@TypeGraphQL.InputType("Product_downloadCreateManyProductInputEnvelope", {})
export class Product_downloadCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_downloadCreateManyProductInput], {
    nullable: false
  })
  data!: Product_downloadCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
