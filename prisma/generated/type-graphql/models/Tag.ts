import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category_tag } from "../models/Category_tag";
import { Customer_tag } from "../models/Customer_tag";
import { Landing_page_tag } from "../models/Landing_page_tag";
import { Media_tag } from "../models/Media_tag";
import { Newsletter_recipient_tag } from "../models/Newsletter_recipient_tag";
import { Order_tag } from "../models/Order_tag";
import { Product_tag } from "../models/Product_tag";
import { Rule_tag } from "../models/Rule_tag";
import { Shipping_method_tag } from "../models/Shipping_method_tag";
import { TagCount } from "../resolvers/outputs/TagCount";

@TypeGraphQL.ObjectType("Tag", {})
export class Tag {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  category_tag?: Category_tag[];

  customer_tag?: Customer_tag[];

  landing_page_tag?: Landing_page_tag[];

  media_tag?: Media_tag[];

  newsletter_recipient_tag?: Newsletter_recipient_tag[];

  order_tag?: Order_tag[];

  product_tag?: Product_tag[];

  rule_tag?: Rule_tag[];

  shipping_method_tag?: Shipping_method_tag[];

  @TypeGraphQL.Field(_type => TagCount, {
    nullable: true
  })
  _count?: TagCount | null;
}
