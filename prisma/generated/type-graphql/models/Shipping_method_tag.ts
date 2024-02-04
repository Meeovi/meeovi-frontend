import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Shipping_method } from "../models/Shipping_method";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType("Shipping_method_tag", {})
export class Shipping_method_tag {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  shipping_method_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  tag_id!: Buffer;

  shipping_method?: Shipping_method;

  tag?: Tag;
}
