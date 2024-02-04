import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { CustomerRelationFilter } from "../inputs/CustomerRelationFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("Customer_tagWhereInput", {})
export class Customer_tagWhereInput {
  @TypeGraphQL.Field(_type => [Customer_tagWhereInput], {
    nullable: true
  })
  AND?: Customer_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereInput], {
    nullable: true
  })
  OR?: Customer_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_tagWhereInput], {
    nullable: true
  })
  NOT?: Customer_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerRelationFilter, {
    nullable: true
  })
  customer?: CustomerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
