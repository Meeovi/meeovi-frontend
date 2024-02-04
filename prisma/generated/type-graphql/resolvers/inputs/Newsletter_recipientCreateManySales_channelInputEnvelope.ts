import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManySales_channelInput } from "../inputs/Newsletter_recipientCreateManySales_channelInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateManySales_channelInputEnvelope", {})
export class Newsletter_recipientCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateManySales_channelInput], {
    nullable: false
  })
  data!: Newsletter_recipientCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
