import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Payment_tokenWhereInput } from "../inputs/Payment_tokenWhereInput";

@TypeGraphQL.InputType("Payment_tokenWhereUniqueInput", {})
export class Payment_tokenWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  token?: string | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenWhereInput], {
    nullable: true
  })
  AND?: Payment_tokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenWhereInput], {
    nullable: true
  })
  OR?: Payment_tokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_tokenWhereInput], {
    nullable: true
  })
  NOT?: Payment_tokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expires?: DateTimeFilter | undefined;
}
