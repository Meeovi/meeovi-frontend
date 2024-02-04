import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Customer_tagScalarWhereInput", {})
export class Customer_tagScalarWhereInput {
  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereInput], {
    nullable: true
  })
  AND?: Customer_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereInput], {
    nullable: true
  })
  OR?: Customer_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagScalarWhereInput], {
    nullable: true
  })
  NOT?: Customer_tagScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;
}
