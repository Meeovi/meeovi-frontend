import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateManySales_channelInputEnvelope } from "../inputs/Newsletter_recipientCreateManySales_channelInputEnvelope";
import { Newsletter_recipientCreateOrConnectWithoutSales_channelInput } from "../inputs/Newsletter_recipientCreateOrConnectWithoutSales_channelInput";
import { Newsletter_recipientCreateWithoutSales_channelInput } from "../inputs/Newsletter_recipientCreateWithoutSales_channelInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateNestedManyWithoutSales_channelInput", {})
export class Newsletter_recipientCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Newsletter_recipientCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Newsletter_recipientCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Newsletter_recipientCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereUniqueInput], {
    nullable: true
  })
  connect?: Newsletter_recipientWhereUniqueInput[] | undefined;
}
