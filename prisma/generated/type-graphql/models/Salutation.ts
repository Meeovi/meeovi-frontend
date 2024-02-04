import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Customer_address } from "../models/Customer_address";
import { Newsletter_recipient } from "../models/Newsletter_recipient";
import { Order_address } from "../models/Order_address";
import { Order_customer } from "../models/Order_customer";
import { Salutation_translation } from "../models/Salutation_translation";
import { SalutationCount } from "../resolvers/outputs/SalutationCount";

@TypeGraphQL.ObjectType("Salutation", {})
export class Salutation {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  salutation_key!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  customer?: Customer[];

  customer_address?: Customer_address[];

  newsletter_recipient?: Newsletter_recipient[];

  order_address?: Order_address[];

  order_customer?: Order_customer[];

  salutation_translation?: Salutation_translation[];

  @TypeGraphQL.Field(_type => SalutationCount, {
    nullable: true
  })
  _count?: SalutationCount | null;
}
