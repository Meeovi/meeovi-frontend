import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportCreateManyProduct_streamInput } from "../inputs/Product_exportCreateManyProduct_streamInput";

@TypeGraphQL.InputType("Product_exportCreateManyProduct_streamInputEnvelope", {})
export class Product_exportCreateManyProduct_streamInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_exportCreateManyProduct_streamInput], {
    nullable: false
  })
  data!: Product_exportCreateManyProduct_streamInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
