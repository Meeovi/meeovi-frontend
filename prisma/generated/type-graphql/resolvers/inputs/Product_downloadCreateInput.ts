import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateNestedOneWithoutProduct_downloadInput } from "../inputs/MediaCreateNestedOneWithoutProduct_downloadInput";
import { ProductCreateNestedOneWithoutProduct_downloadInput } from "../inputs/ProductCreateNestedOneWithoutProduct_downloadInput";

@TypeGraphQL.InputType("Product_downloadCreateInput", {})
export class Product_downloadCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutProduct_downloadInput, {
    nullable: false
  })
  media!: MediaCreateNestedOneWithoutProduct_downloadInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_downloadInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_downloadInput;
}
