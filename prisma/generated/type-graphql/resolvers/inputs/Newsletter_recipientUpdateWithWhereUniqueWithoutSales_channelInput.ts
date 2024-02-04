import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientUpdateWithoutSales_channelInput } from "../inputs/Newsletter_recipientUpdateWithoutSales_channelInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Newsletter_recipientUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Newsletter_recipientUpdateWithoutSales_channelInput;
}
