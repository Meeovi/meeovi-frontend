import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateWithoutSales_channelInput } from "../inputs/Newsletter_recipientCreateWithoutSales_channelInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateOrConnectWithoutSales_channelInput", {})
export class Newsletter_recipientCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Newsletter_recipientCreateWithoutSales_channelInput;
}
