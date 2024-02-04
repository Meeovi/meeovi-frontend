import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_tagCreateManyTagInput } from "../inputs/Product_tagCreateManyTagInput";

@TypeGraphQL.InputType("Product_tagCreateManyTagInputEnvelope", {})
export class Product_tagCreateManyTagInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_tagCreateManyTagInput], {
    nullable: false
  })
  data!: Product_tagCreateManyTagInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
