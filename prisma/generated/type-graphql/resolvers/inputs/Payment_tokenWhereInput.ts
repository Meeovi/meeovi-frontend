import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Payment_tokenWhereInput", {})
export class Payment_tokenWhereInput {
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

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  token?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expires?: DateTimeFilter | undefined;
}
