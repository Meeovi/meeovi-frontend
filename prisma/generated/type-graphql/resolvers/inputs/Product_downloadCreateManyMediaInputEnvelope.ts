import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateManyMediaInput } from "../inputs/Product_downloadCreateManyMediaInput";

@TypeGraphQL.InputType("Product_downloadCreateManyMediaInputEnvelope", {})
export class Product_downloadCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_downloadCreateManyMediaInput], {
    nullable: false
  })
  data!: Product_downloadCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
