import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_mediaCreateManyMediaInput } from "../inputs/Product_mediaCreateManyMediaInput";

@TypeGraphQL.InputType("Product_mediaCreateManyMediaInputEnvelope", {})
export class Product_mediaCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_mediaCreateManyMediaInput], {
    nullable: false
  })
  data!: Product_mediaCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
