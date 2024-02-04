import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelCreateNestedOneWithoutKlaviyo_job_cart_requestInput } from "../inputs/Sales_channelCreateNestedOneWithoutKlaviyo_job_cart_requestInput";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestCreateInput", {})
export class Klaviyo_job_cart_requestCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  serialized_request!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutKlaviyo_job_cart_requestInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutKlaviyo_job_cart_requestInput;
}
